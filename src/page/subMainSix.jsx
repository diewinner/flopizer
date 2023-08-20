import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";

export const SubMainSix = ({ clsTabs, clsHead, clsContHead, cls }) => {
    const title = 'Revisit your insights whenever you need'
    const subtitle = 'Preserve your hard-earned strategies, revisit them, and unveil fresh insights by comparing them with new ones.'

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