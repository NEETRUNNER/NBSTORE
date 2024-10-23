import Slider from '../other/MainSlider';

import { useState } from 'react';

const Main = () => {
    const [active, setActive] = useState(false);

    return (
        <main className="main">
            <Slider/>
        </main>
    )
}

export default Main;