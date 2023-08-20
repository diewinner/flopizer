import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";

export const SubMainFour = ({ clsTabs, clsHead, clsContHead, cls }) => {
    const title = 'New way to visualize your opportunities'
    return (
        <div>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div>
                    <ContentTitle clsContHead={clsContHead} title={title}/>
                </div>
            </div>
        </div>
    )
}