import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";

export const SubMainSeven = ({ clsTabs, clsHead, clsContHead, cls }) => {
    const title = 'Tailor Your Tactics'
    const subtitle = 'Enter the Strategy Editor – the game-changer that sets you apart from the opponents. It\'s all about tailoring your tactics with surgical precision.'

    return (
        <div>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div>
                    <ContentTitle clsContHead={clsContHead} title={title} subtitle={subtitle}/>
                </div>
            </div>
        </div>
    )
}