import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";
import {ContentList} from "../components/main/contentList";
import screen1 from "../assets/img/subMain_5/subMain_5_1.jpg";
import screen2 from "../assets/img/subMain_5/subMain_5_2.jpg";
import screen3 from "../assets/img/subMain_5/subMain_5_3.jpg";
import screen4 from "../assets/img/subMain_5/subMain_5_4.jpg";

export const SubMainFive = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'Discover a perspective that enhances your understanding'
    const subtitle = 'Enhance your learning experience by leveraging four additional reports, each presenting data from various angles. Each mode offers distinct data aggregation levels, giving you comprehensive insights.'
    const list =
        {
            title1: 'Pocket Hand View',
            text1: 'Gain insights into how your pocket hand impacts your strategy.',
            screen1: screen1,

            title2: 'OOP + IP View',
            text2: 'Understand how being in and out of position impacts decisions. Craft counter-strategies based on the actions of both players.',
            screen2: screen2,

            title3: 'Table View',
            text3: 'Analyze overall gameplay dynamics from a table-wide perspective.',
            screen3: screen3,

            title4: 'Runout Analysis',
            text4: 'Utilize aggregated view to analyze the turn and its impact. Understand the strategic adjustments required as the board develops.',
            screen4: screen4,
        }

    const footer = {
        title:'Try all these modes for free',
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
                                 title2={list.title2}
                                 title3={list.title3}
                                 title4={list.title4}
                                 text1={list.text1}
                                 text2={list.text2}
                                 text3={list.text3}
                                 text4={list.text4}
                                 screen2={list.screen2}
                                 screen1={list.screen1}
                                 screen3={list.screen3}
                                 screen4={list.screen4}
                                 cls={cls}
                    />
                    <ContentFooter clsContFooter={clsContFooter} title={footer.title} text={footer.text}/>
                </div>
            </div>
        </div>
    )
}