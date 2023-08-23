import {HeadTitle} from "../../components/subMain/headTitle";
import {Tabs} from "../../components/subMain/Tabs";
import {ContentTitle} from "../../components/subMain/contentTitle";
import {ContentFooter} from "../../components/subMain/contentFooter";
import {ContentList} from "../../components/subMain/contentList";
import screen1 from "../../assets/img/subMain_6/subMain_6_1.jpg";
import screen2 from "../../assets/img/subMain_6/subMain_6_2.jpg";
import cls from '../../assets/styles/subMain.module.scss'

export const SubMainSix = () => {
    const title = 'Revisit your insights whenever you need'
    const subtitle = 'Preserve your hard-earned strategies, revisit them, and unveil fresh insights by comparing them with new ones.'
    const list =
        {
            title1: 'Maintain a record of your solutions',
            text1: 'Save all your calculations on your hard drive, ensuring you can reload and access them any time.',
            screen1: screen1,

            title2: 'Compare one strategy with another',
            text2: 'Utilize multiple tabs to effortlessly compare your past calculations with new ones, unlocking valuable strategic perspectives.',
            screen2: screen2,

        }

    const footer = {
        title:'Try Postflopizer for free',
        text:'Download our Demo app and check explore its capabilities. No credit card needed.'
    }
    return (
        <div className={cls.submain_wrapper}>
            <HeadTitle />
            <div className={cls.submain_content_container}>
                <Tabs />
                <div className={cls.submain_content}>
                    <ContentTitle  title={title} subtitle={subtitle}/>
                    <ContentList title1={list.title1}
                                 title2={list.title2}
                                 text1={list.text1}
                                 text2={list.text2}
                                 screen2={list.screen2}
                                 screen1={list.screen1}
                    />
                    <ContentFooter  title={footer.title} text={footer.text}/>
                </div>
            </div>
        </div>
    )
}