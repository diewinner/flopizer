import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";

export const SubMainFive = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'Discover a perspective that enhances your understanding'
    const subtitle = 'Enhance your learning experience by leveraging four additional reports, each presenting data from various angles. Each mode offers distinct data aggregation levels, giving you comprehensive insights.'

    return (
        <div>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div>
                    <ContentTitle clsContHead={clsContHead} title={title} subtitle={subtitle}/>
                    <ContentFooter clsContFooter={clsContFooter}/>
                </div>
            </div>
        </div>
    )
}