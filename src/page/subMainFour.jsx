import {HeadTitle} from "../components/subMain/headTitle";
import {Tabs} from "../components/subMain/Tabs";
import {ContentTitle} from "../components/subMain/contentTitle";
import {ContentFooter} from "../components/subMain/contentFooter";

export const SubMainFour = ({ clsTabs, clsHead, clsContHead, cls, clsContFooter }) => {
    const title = 'New way to visualize your opportunities'
    return (
        <div>
            <HeadTitle clsHead={clsHead}/>
            <div className={cls.submain_content_container}>
                <Tabs clsTabs={clsTabs}/>
                <div>
                    <ContentTitle clsContHead={clsContHead} title={title}/>
                    <ContentFooter clsContFooter={clsContFooter}/>
                </div>
            </div>
        </div>
    )
}