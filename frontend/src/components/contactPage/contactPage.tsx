// Assuming you're using TypeScript, ensure the imports and types are correct
"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../../../public/media/focusFlow-brain-nobg.webp';
import axios from 'axios';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        projectDetails: '',
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('/api/sendEmail', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                projectDetails: formData.projectDetails,
            });
            console.log(response.data);
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', projectDetails: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form.');
        }
    };


    const tenets = [
        'Creativity',
        'Speed',
        'Discipline',
        'Tenacity',
    ];

    return (
        <section className='flex overflow-x-hidden justify-center items-center'>
            <div className='hidden sm:block sm:w-[50vw] ml-auto mr-auto flex flex-col items-start'>
                <Image
                    src={logo}
                    alt="Q3 logo"
                    className='w-[40vw] mt-[-10rem] ml-auto mr-auto
                    max-h-[540px] max-w-[411px] object-cover'
                    priority
                />
                <ul className='text-center'>
                    {tenets.map((tenet, index) => (
                        <motion.li
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? 100 : -100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: index * 0.4,
                                },
                            }}
                            className='text-white mb-1'
                        >
                            {tenet}
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: tenets.length * 0.4 },
                        }}
                        className='text-2xl text-[#00bfff]'
                    >
                        We will get it done
                    </motion.li>
                </ul>
            </div>
            <div className='w-[90vw] ml-auto mr-auto sm:w-[50vw]'>
                <Image
                    src={logo}
                    alt="Q3 logo"
                    className='w-[20vw] object-cover ml-auto mr-auto sm:hidden
                    max-h-[590px]
                    max-w-[445px]'
                />
                <section className='w-[90%] sm:w-auto mt-5 mr-auto'>
                    
                </section>
                <form onSubmit={handleSubmit} className='w-[90vw] mt-5 ml-auto mr-auto flex flex-col justify-center items-center'>
                    <label className='mb-2 w-[90vw]'>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='border-2 w-full sm:w-[40vw] ml-auto mr-auto border-[#00bfff] p-2 rounded mt-1 bg-gray-800'
                            required
                            placeholder='Name'
                        />
                    </label>
                    <label className='mb-2 w-[90vw] sm:w-[40vw] mr-auto'>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='border-2 w-full mr-auto border-[#00bfff] p-2 rounded mt-1 bg-gray-800'
                            required
                            placeholder='Email address'
                        />
                    </label>
                    <label className='mb-2 w-[90vw]'>
                        <input
                            type='text'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='border-2 w-full sm:w-[40vw] ml-auto mr-auto border-[#00bfff] p-2 rounded mt-1 bg-gray-800'
                            required
                            placeholder='Phone number'
                        />
                    </label>
                    <label className='w-full sm:w-[40vw] mr-auto'>
                        <textarea
                            name='projectDetails'
                            value={formData.projectDetails}
                            onChange={handleChange}
                            className='border-2 w-full border-[#00bfff] p-2 rounded mt-1 bg-gray-800'
                            rows={5}
                            required
                            placeholder='Project details'
                        />
                    </label>
                    <p className='w-[90%] sm:w-[45vw] mt-4 mr-auto'>
                        The laws of physics state that for every action, there is an equal and opposite reaction.
                        <br /> Use this law to create the reality you desire.
                    </p>
                    <button
                        type='submit'
                        className='bg-[#00bfff] w-[150px] mr-auto text-white p-2 rounded mt-4 hover:bg-blue-600 sm:ml-0'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
