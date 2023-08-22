import {HeadTitle} from "../../components/subMain/headTitle";
import {Tabs} from "../../components/subMain/Tabs";
import {ContentTitle} from "../../components/subMain/contentTitle";
import {ContentFooter} from "../../components/subMain/contentFooter";
import {ContentList} from "../../components/main/contentList";
import screen1 from "../../assets/img/subMain_4/subMain_4_1.jpg";
import screen2 from "../../assets/img/subMain_4/subMain_4_2.jpg";
import cls from '../../assets/styles/subMain.module.scss'
import clsTabs from '../../assets/styles/components/subMain/tabs.module.scss'
import clsHead from '../../assets/styles/components/subMain/headTitle.module.scss'
import clsContHead from '../../assets/styles/components/subMain/contentTitle.module.scss'
import clsContFooter from '../../assets/styles/components/subMain/contentFooter.module.scss'
export const SubMainFour = () => {
    const title = 'New way to visualize your opportunities'

    const list =
        {
            text1: 'Dive into strategic decision-making by dissecting the interplay between your pocket hand and made hands. The matrix reveals various combinations, suggesting whether to raise the stakes or avoid confrontation. Prepare for strategic insights that might catch you off guard.',
            screen1: screen1,

            text2: 'Unveil the unexpected patterns of EV and Equity dependencies. This view reflects how equity is spread across hands in each move, giving you a clear view of your gameplay dynamics.',
            screen2: screen2,

        }

    const footer = {
        title:'Try the Decision Matrix for free',
        text:'Download our Demo app and check explore its capabilities. No credit card needed.'
    }
    return (
        <div className={cls.submain_wrapper}>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div className={cls.submain_content}>
                    <ContentTitle clsContHead={clsContHead} title={title}/>
                    <ContentList title1={list.title1}
                                 title2={list.title2}
                                 text1={list.text1}
                                 text2={list.text2}
                                 screen2={list.screen2}
                                 screen1={list.screen1}
                                 cls={cls}
                    />
                    <ContentFooter clsContFooter={clsContFooter} title={footer.title} text={footer.text}/>
                </div>
            </div>
        </div>
    )
}