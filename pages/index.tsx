import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import Question1 from '@/components/q1'
import Question2 from '@/components/q2'
import Question3 from '@/components/q3'
import Question4 from '@/components/q4'
import Question5 from '@/components/q5'
import Question6 from '@/components/q6'
import Question7 from '@/components/q7'
import Question8 from '@/components/q8'
import Question9 from '@/components/q9'
import Question10 from '@/components/q10'
import Question11 from '@/components/q11'
import Question12 from '@/components/q12'
import Question13 from '@/components/q13'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <h1>Brinks Global - Test - Fronted developer</h1>

      <div style={{ margin: "20px 0" }}>
        <a href="https://github.com/jarangit/BGT" target='_bank'>
          My Code on GitHub
        </a>
      </div>
      {/* questions */}
      <div>
        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
        <Question5 />
        <Question6 />
        <Question7 />
        <Question8 />
        <Question9 />
        <Question10 />
        <Question11 />
        <Question12 />
        <Question13 />
      </div>
    </>
  )
}
