import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";
import {ContentList} from "../components/main/contentList";
import screen1 from "../assets/img/subMain_3/subMain_3_1.jpg";
import screen2 from "../assets/img/subMain_3/subMain_3_2.jpg";
import screen3 from "../assets/img/subMain_3/subMain_3_3.jpg";

export const SubMainThree = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'See your strategy evolve in a real-time'

    const subtitle = 'Gain a better understanding of what lies ahead in the tree and seamlessly modify it to fit your needs with our Tree Preview feature.'

    const list =
        {
            title1: 'Witness the unfolding',
            text1: 'Experience your future tree\'s structure and variations come to life as you refine your ranges – all on the same screen.',
            screen1: screen1,

            title2: 'A hint of reverse engineering',
            text2: ' With the ability to fine-tune the future tree from the preview mode, you will adjust the details you\'ve just input moments ago.',
            screen2: screen2,

            title3: 'Keep your preferences safe',
            text3: 'Curate and store personalized ranges, creating your own organized folders, all securely backed up on the server. Your preferred templates and pre-saved trees always remain accessible.',
            screen3: screen3,
        }

    const footer = {
        title:'Enjoy the Tree Preview for free',
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