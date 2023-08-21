import {Tabs} from "../components/subMain/Tabs";
import {HeadTitle} from "../components/subMain/headTitle";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";
import screen1 from '../assets/img/subMain_1/subMain_1_1.jpg'
import screen2 from '../assets/img/subMain_1/subMain_1_2.jpg'
import screen3 from '../assets/img/subMain_1/subMain_1_3.jpg'
import {ContentList} from "../components/main/contentList";
export const SubMainOne = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'Tailor Your Tactics'
    const subtitle = 'Enter the Strategy Editor – the game-changer that sets you apart from the opponents. It\'s all about tailoring your tactics with surgical precision.'
    const list =
        {
            title1: 'Customize on every nod',
            text1: 'Lock specific hands that matter most to your strategy, ensuring focused adjustments. At the same time, leave other hands unlocked for recalculations.',
            screen1: screen1,

            title2: 'Exploit their mistakes',
            text2: 'By locking hands and customizing ranges, you tell the solver that a specific player might play not optimally but according to their preferences. For example, certain hands there likely to raise. The editor enables you to select any strategy that matches how your opponent plays in reality.',
            screen2: screen2,

            title3: 'Learn by comparison',
            text3: 'After making adjustments, seamlessly compare one outcome with another. Whether you have fine-tuned ranges or locked specific hands, the power to effortlessly assess and contrast different strategies is at your fingertips.',
            screen3: screen3,
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
                    <ContentTitle  clsContHead={clsContHead} title={title} subtitle={subtitle}/>
                        <ContentList title1={list.title1}
                                     title2={list.title2}
                                     title3={list.title3}
                                     text1={list.text1}
                                     text2={list.text2}
                                     text3={list.text3}
                                     screen2={list.screen2}
                                     screen1={list.screen1}
                                     screen3={list.screen3}
                                     cls={cls}
                        />
                    <ContentFooter clsContFooter={clsContFooter} title={footer.title} text={footer.text}/>
                </div>
            </div>

        </div>
    )
}