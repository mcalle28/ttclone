import React from 'react';
import '../css/footer.css';
import { Icon } from '@iconify/react';
import Ticker from 'react-ticker'


function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@tik.Tok</h3>
                <p>Fancam of the satanic twice song</p>
                <div className="videoFooter_ticker">
                    <Icon icon="fluent:music-note-2-24-filled" className="videoFooter_icon" color="white"/>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>Twice - Satanic song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}
export default VideoFooter;
