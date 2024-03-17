import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  
  let encodedQuestionString = req.nextUrl.searchParams.get('questionString');

  if(!encodedQuestionString) throw new Error("No question string found")

  let questionString = decodeURIComponent(encodedQuestionString);



  console.log(req.nextUrl.searchParams, "req.nextUrl.searchParams")

  console.log(questionString, "questionString generate image")
  

  const color = "#8a63d2"

  return new ImageResponse(
    (
      <Card>
        <h1
          style={{
            color,
            fontSize: 24,
          }}
        >
          {questionString.toString()}
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