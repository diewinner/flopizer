import {HeadTitle} from "../../components/subMain/headTitle";
import {Tabs} from "../../components/subMain/Tabs";
import {ContentTitle} from "../../components/subMain/contentTitle";
import {ContentFooter} from "../../components/subMain/contentFooter";
import {ContentList} from "../../components/main/contentList";
import screen1 from "../../assets/img/subMain_7/subMain_7_1.jpg";
import cls from '../../assets/styles/subMain.module.scss'
import clsTabs from '../../assets/styles/components/subMain/tabs.module.scss'
import clsHead from '../../assets/styles/components/subMain/headTitle.module.scss'
import clsContHead from '../../assets/styles/components/subMain/contentTitle.module.scss'
import clsContFooter from '../../assets/styles/components/subMain/contentFooter.module.scss'
export const SubMainSeven = () => {
    const title = 'Tailor Your Tactics'
    const subtitle = 'Enter the Strategy Editor – the game-changer that sets you apart from the opponents. It\'s all about tailoring your tactics with surgical precision.'
    const list =
        {
            title1: 'Keep your momentum flowing',
            text1: 'Don\'t wait for the final result to start refining or developing new strategies. While one analysis is underway, you can seamlessly craft and fine-tune a new approach. Just send it to the queue and continue working.',
            screen1: screen1,
        }

    const footer = {
        title:'Try the Postflopizer for free',
        text:'Download our Demo app and check explore its capabilities. No credit card needed.'
    }
    return (
        <div className={cls.submain_wrapper}>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div className={cls.submain_content}>
                    <ContentTitle clsContHead={clsContHead} title={title} subtitle={subtitle}/>
                    <ContentList title1={list.title1}
                                 text1={list.text1}
                                 screen1={list.screen1}
                                 cls={cls}
                    />
                    <ContentFooter clsContFooter={clsContFooter} title={footer.title} text={footer.text}/>
                </div>
            </div>
        </div>
    )
}