import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";

export const SubMainThree = ({ clsTabs, clsHead, clsContHead, cls }) => {
    const title = 'See your strategy evolve in a real-time'
    const subtitle = 'Gain a better understanding of what lies ahead in the tree and seamlessly modify it to fit your needs with our Tree Preview feature.'

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