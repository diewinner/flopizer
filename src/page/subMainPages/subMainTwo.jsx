import {HeadTitle} from "../../components/subMain/headTitle";
import {Tabs} from "../../components/subMain/Tabs";
import {ContentTitle} from "../../components/subMain/contentTitle";
import {ContentFooter} from "../../components/subMain/contentFooter";
import screen1 from "../../assets/img/subMain_2/subMain_2_1.jpg";
import screen2 from "../../assets/img/subMain_2/subMain_2_2.jpg";
import screen3 from "../../assets/img/subMain_2/subMain_2_3.jpg";
import {ContentList} from "../../components/main/contentList";

export const SubMainTwo = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'Save your time on inputting'
    const subtitle = 'Meet Quick Start Mode – a setup that leads you straight to the essence of your game without unnecessary overthinking. '
    const list =
        {
            title1: 'Don’t reinvent the wheel',
            text1: 'If you\'re looking to skip the complexities of input and avoid the mistakes, this mode is your perfect starting point. Input minimal data and immediately dive into analyzing the strategy.',
            screen1: screen1,

            title2: 'Start from the Table',
            text2: 'With the added advantage of the table view right on the start screen, you can effortlessly visualize the unfolding game.',
            screen2: screen2,

            title3: 'Choose the depth of your calculations',
            text3: 'Choose from an array of expertly crafted, curated trees. Fast, Medium or Slow? Each option strikes its own balance between speed and accuracy.',
            screen3: screen3,
        }
    const footer = {
        title:'Try the Quick Start Mode for free',
        text:'Download our Demo app and check explore its capabilities. No credit card needed.'
    }
    return (
        <div  className={cls.submain_wrapper}>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div className={cls.submain_content}>
                    <ContentTitle clsContHead={clsContHead} title={title} subtitle={subtitle}/>
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