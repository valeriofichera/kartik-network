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
        fontSize: 40, // Set the initial font size
        wordWrap: 'break-word', // Enable word wrapping
        maxWidth: '100%', // Ensure the text doesn't exceed the container width
      }}
    >
      {questionString}
    </h1>
    <style jsx>{`
      h1 {
        max-height: 200px; // Example maximum height for the text
        overflow: hidden; // Hide overflow text
        text-overflow: ellipsis; // Show ellipsis (...) for overflow text
      }
    `}</style>
    <div style={{ display: "flex", marginTop: "12" }}>
      {/* Other content */}
    </div>
  </Card>
  ),
  {
    width: 1600,
    height: 600,
  }
)
}