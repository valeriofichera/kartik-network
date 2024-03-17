
import { ImageResponse } from 'next/og'
import {NEXT_PUBLIC_URL} from '../../config'
import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori'
import fs from 'fs'
import path from 'path'

import sharp from 'sharp';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;



async function generateImage(text : string) {
    let imageUrl;
    

}





export async function POST(req: NextRequest): Promise<Response> {

    const interFontBuffer = fs.readFileSync(
        path.resolve(process.cwd(), "src/fonts", "Inter.ttf")
      );

    const imageData = await fetch(`${NEXT_PUBLIC_URL}/park-2.png`).then((res) => res.arrayBuffer());

    const component = (`
    <div
    style={{
      display: 'flex',
      background: '#f6f6f6',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
    }}
  >
    {/* @ts-ignore */}
    <img width="1200" height="630" alt="meme" src={imageData} />
    <p
      style={{
        position: 'absolute',
        margin: 0,
        paddingBottom: 20,
        color: '#ffffff',
        lineHeight: 1,
        fontSize: 100,
        fontFamily: '"Oswald Bold"',
        textAlign: 'center',
        textTransform: 'uppercase',
        textShadow:
          '5px 5px 3px #000, -5px 5px 3px #000, -5px -5px 0 #000, 5px -5px 0 #000',
      }}
    >
      {question}
    </p>
  </div>
    
  `);

  const options = {
    width: 1910,
    height: 1000,
    fonts: [
      {
        name: "Inter",
        data: interFontBuffer,
        weight: 400,
        style: "normal",
      },
    ],
  }

  const svg = await satori(component, options)
    


    
  
    return new NextResponse(
      ///getFrameHtml here
      await generateFrameData(nextQuestion, question_string, options_html)
    );
  
  }