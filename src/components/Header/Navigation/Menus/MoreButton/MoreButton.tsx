import arrow from '/arrow.svg'


export default function MoreButton () {
    return (
        <button style={{margin: 0, padding: 0, border: 0}}>
            <div style={{borderRadius: '50%', width: '13.33px', height: '13.33px', border: '1.5px solid rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={arrow} alt="Открыть меню" style={{width: '5.63px', height: '3.32px'}}/>
            </div>
        </button>
    )
}