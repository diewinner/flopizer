import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";

export const SubMainTwo = ({ clsTabs, clsHead, clsContHead, cls }) => {
    const title = 'Save your time on inputting'
    const subtitle = 'Meet Quick Start Mode – a setup that leads you straight to the essence of your game without unnecessary overthinking. '

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