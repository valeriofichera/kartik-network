import {NEXT_PUBLIC_URL} from '../config'

export async function generateImage(question) {
  
  // const imageData = await fetch(`${NEXT_PUBLIC_URL}/park-2.png`).then((res) => res.arrayBuffer());

  // const encodedQuestion = question !== null ? encodeURIComponent(encodedQuestion) : "";

  const imageUrl = await `${NEXT_PUBLIC_URL}/api/generateImage?questionString=${question}`
  


  
    // const component = (
    //     <div
    //     style={{
    //       display: 'flex',
    //       background: '#f6f6f6',
    //       width: '100%',
    //       height: '100%',
    //       flexDirection: 'column',
    //       justifyContent: 'flex-end',
    //       alignItems: 'center',
    //       position: 'relative',
    //     }}
    //   >
    //     {/* @ts-ignore */}
    //     <img width="1200" height="630" alt="meme" src={imageData} />
    //     <p
    //       style={{
    //         position: 'absolute',
    //         margin: 0,
    //         paddingBottom: 20,
    //         color: '#ffffff',
    //         lineHeight: 1,
    //         fontSize: 100,
    //         fontFamily: '"Oswald Bold"',
    //         textAlign: 'center',
    //         textTransform: 'uppercase',
    //         textShadow:
    //           '5px 5px 3px #000, -5px 5px 3px #000, -5px -5px 0 #000, 5px -5px 0 #000',
    //       }}
    //     >
    //       {question}
    //     </p>
    //   </div>
        
    //   );

      
    return imageUrl




}
