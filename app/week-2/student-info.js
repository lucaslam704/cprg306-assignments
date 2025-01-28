export default function StudentInfo() 
{
    return (
        <>
            <Info
            
            name="Duc Huy Lam (Lucas Lam)" 
            classinfo="CPRG-306-C" 
            img="https://png.pngtree.com/png-vector/20240725/ourmid/pngtree-emo-anime-alone-anime-boy-png-image_12934681.png"
            github="Click here">

            </Info>
        </>
    );

}

function Info({name, classinfo, img, github}) {
    return (
        <div className="bg-blue-200 flex flex-col items-center p-8">
            <h2 className="mb-4">My name is <p className="font-bold">{name}</p></h2>
            <h3 className="mb-4">I'm from <span className="font-bold">{classinfo}</span> class</h3>
            <span className="mb-8">My github link repository <a href="https://github.com/lucaslam704/cprg306-assignments" className="font-bold">{github}</a></span>
            <img className="w-64" src={img} alt={name}></img>
        </div>
    );
}