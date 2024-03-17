import { ImageResponse } from "next/og";
import Card from "./Card";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {

  
  let questionString = req.nextUrl.searchParams.get('questionString');


  console.log(questionString, "questionString")
  

  const color = "#8a63d2"

  return new ImageResponse(
    (
      <Card>
        <h1
          style={{
            color,
            fontSize: 20,
            wordWrap: 'break-word', // or 'overflow-wrap: break-word;'
            maxWidth: '100%', // or any other suitable value
          }}
        >
          {questionString}
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