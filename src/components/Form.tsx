/** @format */

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FormType } from '../types/types'
import { useToast } from '@/components/ui/use-toast'

const initialValues: FormType = {
  name: '',
  email: '',
  message: ''
}

const Form = () => {
  const formRef = useRef()
  const [formState, setformState] = useState(initialValues)

  const { toast } = useToast()

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setformState({ ...formState, [event.target.name]: event.target.value })
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xyl4vfy',
        'template_ueij0ii',
        formRef.current!,
        'dxK4eOAw61JXwWe-i'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast({
            title: 'Votre email a bien été envoyé !',
            variant: 'success'
          })
        },
        (error) => {
          console.log(error.text)
          toast({
            title: `Une erreur s'est produite !`,
            variant: 'destructive'
          })
        }
      )
  }

  return (
    <div className='md:w-2/4'>
      <h1 className='text-xl font-bold pb-4 text-green-500'>
        Entrons en contact
      </h1>

      <form
        className='flex flex-col gap-4'
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Nom</label>
          <input
            type='text'
            name='name'
            value={formState.name}
            onChange={handleInput}
            className='p-2 border border-green-500  rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        {/* <div className='flex flex-col gap-2'>
          <label htmlFor=''>Subject</label>
          <input
            type='text'
            name='subject'
            value={formState.subject}
            onChange={handleInput}
            className='p-2 border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div> */}
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            value={formState.email}
            onChange={handleInput}
            className='p-2 border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=''>Message</label>
          <textarea
            rows={6}
            name='message'
            value={formState.message}
            onChange={handleInput}
            className='border border-green-500 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className=''>
          <button
            type='submit'
            disabled={
              formState.name.length === 0 ||
              formState.email.length === 0 ||
              formState.message.length === 0
            }
            className='w-36 bg-green-500 rounded p-3 text-white'
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
