"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Loader } from "lucide-react"
import axios from 'axios'
import { Textarea } from "@/components/ui/textarea"
import React from "react"
import { toast } from "sonner"

const formSchema = z.object({
  title: z.string().min(5,{message:"title is require"}).max(500),
  story: z.string().min(15,{message:"Descreption is require"}).max(5000),
   image: z.any().optional(),
})

const StoryPage =  () => {
  
  const [isSubmitting,setIsSubmitting]= React.useState(false);
  const {userId}=useAuth();
  const router=useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      story:"",
      image:""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
     setIsSubmitting(true)
     toast("Story is creating...")
    

    const res = await axios.post("/api/story", {
        ...values,
         userId
     })
     if(res.status === 201) {
      
        toast("Story is Created", {
            className: "bg-emerald-500 text-white"
        })
         router.push(`/story`)
         router.refresh()
     }
    
    } catch (error) {
     toast("Something went wrong", {
         className: "bg-rose-500 text-white"
    })
    
    } finally{
    setIsSubmitting(false)
    }
   }

  
  
  return (
    <div className='flex flex-col space-y-5 w-full'>
     
      <div className='flex items-center justify-between '>
         <h1 className='text-2xl font-semibold'>
          My stories
        </h1>
      </div>
      
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descreption</FormLabel>
              <FormControl>
                <Textarea placeholder="Descreption..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display Descreption.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="Url..." {...field} />
              </FormControl>
              <FormDescription>
                This is url for your image.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          
        <Button type="submit">
          {isSubmitting && <Loader /> }
          Creat
         
          </Button>
      </form>
    </Form>
    </div>
    
  )

}

export default StoryPage



