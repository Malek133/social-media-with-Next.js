import { Save,Story } from '@prisma/client';
import React from 'react'

interface Props {
     story: Story;
    saves: Save[];
  }
  

const SaveForm = ({ saves,story }: Props) => {
  return (
    <div>
      SaveForm
    </div>
  )
}

export default SaveForm
