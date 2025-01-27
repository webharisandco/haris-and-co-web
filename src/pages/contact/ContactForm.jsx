import { Contact } from 'lucide-react'
import ContactButton from '../../components/ContactButton'
import React from 'react'
import Input from '../../components/ui/common/Input'
import Textarea from '../../components/ui/common/Textarea'

export default function ContactForm() {
    return (
        <div className='bg-black p-14 grid grid-cols-[0.8fr_1fr] gap-[60px]'>
            <div className="flex flex-col gap-8">
                <h6 className='text-white text-[34px]'>Contact Us</h6>
                <form action="" className='flex flex-col gap-8'>
                    <Input label={'Name'}/>
                    <Input label={'Email'}/>
                    <Input label={'Phone'}/>
                    <Textarea />
                    <ContactButton text='Contact Us' />
                </form>
            </div>
            <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.484367376539!2d75.79183259999999!3d11.225735499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e5bc6ffbb%3A0xbd15f0508abb882b!2sHaris%26Co!5e0!3m2!1sen!2sin!4v1737460912360!5m2!1sen!2sin" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
            </div>
        </div>
    )
}
