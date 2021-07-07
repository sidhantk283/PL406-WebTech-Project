import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image='data:image/jpeg;base64,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'
                profileSrc='https://twitter.com/Iron_Man?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                title='Sidhant Karbotkar'
            />

             <Story 
                image='https://yt3.ggpht.com/ytc/AAUvwngrqvHt2gZ3euJdqkzx8O-J1Ly8CCIKJPS5uUNrSlc=s900-c-k-c0x00ffffff-no-rj'
                profileSrc='https://twitter.com/Iron_Man?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                title='Kunal Gaonkar'
            />

             <Story 
                image='https://scontent.fnag1-1.fna.fbcdn.net/v/t1.6435-1/p200x200/67905297_211616013177414_5300320613443829760_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=9i-8mdGXxQMAX_ggALD&_nc_ht=scontent.fnag1-1.fna&tp=6&oh=9ee409e4aa8add8890566a0b0222570f&oe=60EA1B2B'
                profileSrc='https://twitter.com/Iron_Man?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                title='Prajacta Mauskar'
            />
            
        </div>
    )
}

export default StoryReel
