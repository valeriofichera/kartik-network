import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import {generateImage} from '../utils/generateImage'

export const generateFrameData =  async (quizNum, question_string, options_html) => {

  console.log(quizNum, "quizNum")

  console.log(question_string, "question_string in framedata")


    return getFrameHtmlResponse({
        // buttons: [
        //   {
        //     label: `generateFrameData!`,
        //   }
        // ],
        buttons : options_html,
        // image:  `${NEXT_PUBLIC_URL}/park-1.png`,
        image: generateImage(question_string),
        post_url: `${NEXT_PUBLIC_URL}/api/quiz?currentQuestion=${quizNum}`,
      })
}


