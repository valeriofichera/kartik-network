import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';
import url from "URL";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {

  const requestBody = await req.json(); // To read request data

  const queryParams = url.parse(req.url, true).query; 
  
  // let encodedQuestionString = req.nextUrl.searchParams.get('questionString');

  // if(!encodedQuestionString) throw new Error("No question string found")

  // let questionString = decodeURIComponent(encodedQuestionString);



  // console.log(req.nextUrl.searchParams, "req.nextUrl.searchParams")

  // console.log(JSON.stringify(questionString), "questionString generate image")
  

  const color = "#8a63d2"

  return new ImageResponse(
    (
      <Card>
        <h1
          style={{
            color,
            fontSize: 40,
          }}
        >
          {queryParams}
        </h1>
        <div style={{ display: "flex", marginTop: "12" }}>
        </div>
      </Card>
    ),
    {
      width: 1600,
      height: 600,
    },
  );
}