import './loading.css';

export default async function Loading() {
    return (<div className='Loading'>
    <div className="lds-ellipsis"><div></div><div></div><div></div></div>
    </div>
    );
}