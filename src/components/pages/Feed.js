import React from 'react';
import '../../App.css';
import { TikTok} from "react-tiktok";


export default function Feed() {
  return (
    <div className='Feed'>
      <li>
      <TikTok url='https://www.tiktok.com/@xojustkirst/video/7096917072994651438' />
      <TikTok url='https://www.tiktok.com/@xojustkirst/video/7085583114793225515' />
      <TikTok url='https://www.tiktok.com/@xojustkirst/video/7084399776661359914' />
      </li>
    </div>
    );

}
