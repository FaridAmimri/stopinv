/** @format */
import { useState } from 'react'
import { RequestType } from '../types/types'
import { Button } from './ui/button'
import { useToast } from '@/components/ui/use-toast'

const initialValues: RequestType = {
  name: '',
  email: '',
  service: 'Maison'
}

const Booking = () => {
  const [values, setValues] = useState(initialValues)

  const { toast } = useToast()

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body =
      'Demande de devis pour: ' +
      values.name +
      '<br/> Email: ' +
      values.email +
      '<br/> Type de service: ' +
      values.service

    const config = {
      SecureToken: '502c2030-2675-40bf-bf4d-eebf6f64e3cc',
      To: 'contact@stopinvasion.fr',
      From: 'contact@stopinvasion.fr',
      Subject: 'Demande de devis',
      Body: body
    }

    // @ts-ignore
    if (window.Email) {
      // @ts-ignore
      window.Email.send(config)
        .then(
          () =>
            toast({
              title: 'Votre message a bien été envoyé !',
              description: 'Une réponse vous parviendra sous 24h',
              variant: 'neutral'
            }),
          setValues(initialValues)
        )
        .catch(() =>
          toast({
            title: `Une erreur s'est produite !`,
            variant: 'destructive'
          })
        )
    }
  }

  return (
    <div className='p-8 flex flex-col gap-6' id='booking'>
      <div className=' flex flex-col gap-2 md:items-center md:py-10'>
        <h1 className='text-4xl font-bold lg:w-1/2 lg:text-center'>
          Prenez un rdv pour un devis
        </h1>
        <p className='text-lg font-bold'>
          <span className='text-green-500'>Réponse sous 24h </span>
        </p>
      </div>

      <form
        className='ring-1 ring-gray-300 p-4 flex flex-col gap-4 md:mb-10 lg:flex-row lg:gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Nom</label>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleInput}
            className='border border-green-500 p-2 rounded-sm focus:border-red-500 outline-none'
          />
        </div>
        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={values.email}
            onChange={handleInput}
            className='border border-green-500 p-2 rounded-sm focus:border-red-500 outline-none'
          />
        </div>

        <div className='flex flex-col gap-2 lg:flex-1'>
          <label>Services</label>
          <select
            className='w-24'
            name='service'
            value={values.service}
            onChange={handleInput}
          >
            <option value='Maison'>Maison</option>
            <option value='Bureau'>Bureau</option>
            <option value='Immeuble'>Immeuble</option>
            <option value='Commerce'>Commerce</option>
            <option value='Agence Immobilière'>Agence Immobilière</option>
            <option value='Bailleur'>Bailleur</option>
            <option value='Partenaire'>Partenaire</option>
            <option value='Véhicule'>Véhicule</option>
          </select>
        </div>

        <div className='lg:flex lg:items-center'>
          <Button
            type='submit'
            className='w-36 bg-green-500 hover:bg-red-500 rounded p-3 text-white'
          >
            Estimer
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Booking
