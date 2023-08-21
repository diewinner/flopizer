import {Tabs} from "../components/subMain/Tabs";
import {HeadTitle} from "../components/subMain/headTitle";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";

export const SubMainOne = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'Tailor Your Tactics'
    const subtitle = 'Enter the Strategy Editor – the game-changer that sets you apart from the opponents. It\'s all about tailoring your tactics with surgical precision.'
    return (
        <div>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div>
                    <ContentTitle clsContHead={clsContHead} title={title} subtitle={subtitle}/>
                    <ContentFooter clsContFooter={clsContFooter}/>
                </div>
            </div>

        </div>
    )
}