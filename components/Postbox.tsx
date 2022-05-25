import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Avatar from './Avatar'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'
import { useMutation} from '@apollo/client'
import { ADD_POST } from '../graphql/mutations'
import client from '../apollo-client'
type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

function Postbox() {
  const { data: session } = useSession()
const [addPost] = useMutation(ADD_POST)

  const [imageBoxOpen, setImageBoxOpen] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

const onSubmit = handleSubmit(async (FormData) => {
    console.log(FormData)

    try {
       
    } catch (error) {
      
    }
})


  return (
    <form onSubmit={onSubmit} className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2">
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          {...register('postTitle', { required: true })}
          type="text"
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          placeholder={session ? 'Create a Post' : 'Sign to Post'}
        />
        <PhotographIcon onClick={()=>setImageBoxOpen(!imageBoxOpen)} 
        className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`} />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

{!!watch('postTitle') && (
    <div className='flex flex-col py-2'>
        <div className='flex items-center px-2'>

            <p className='min-w-[90px]'>Body:</p>
            <input className='flex-1 m-2 bg-blue-50 p-2 outline-none'
            type='text'
            {...register('postBody')}
            placeholder='Text (optional)'
            />
        </div>
        <div className='flex items-center px-2'>

            <p className='min-w-[90px]'>Subreddit:</p>
            <input className='flex-1 m-2 bg-blue-50 p-2 outline-none'
            type='text'
            {...register('subreddit',{required:true})}
            placeholder='Lost in the sky'
            />
        </div>
        {imageBoxOpen && (
                    <div className='flex items-center px-2'>

                    <p className='min-w-[90px]'>Image URL:</p>
                    <input className='flex-1 m-2 bg-blue-50 p-2 outline-none'
                    type='text'
                    {...register('postImage')}
                    placeholder='Image Url'
                    />
                </div>
        )}
        {Object.keys(errors).length > 0 && (
            <div className='space-x-2 p-2 text-red-500'>
                {errors.postTitle?.type === 'required' && 
                <p>A Post title is required</p>
                }
                                {errors.subreddit?.type === 'required' && 
                <p>A Subreddit  is required</p>
                }
                </div>
        )}
        {!!watch('postTitle') && (
            <button type='submit' className='w-full rounded-full bg-blue-400 p-2 text-white'  >Create Post</button>
        )}
    </div>
)}

    </form>
  )
}

export default Postbox
