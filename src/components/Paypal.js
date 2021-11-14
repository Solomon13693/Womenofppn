import React from 'react'

function Paypal() {
    return (
        <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="N4343XFBBP7CQ" />
            <input type="image" style={{width: "300px"}} src="https://www.paypal-community.com/t5/image/serverpage/image-id/56084iFE8EEC50D9040CCB/image-size/large?v=v2&px=999" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_NG/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    )
}

export default Paypal
