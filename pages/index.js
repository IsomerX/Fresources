import PdfViewer from '../components/PdfViewer'

export default function Home() {
    return (
        <>
            <div className='h-1/4'>ads container</div>

            <div className='lg:w-3/4 h-screen mx-auto overflow-y-scroll md:w-screen '>
                <PdfViewer link='https://data-storage.sgp1.digitaloceanspaces.com/2K21_B7_36_DHRUV_BAKSHI.pdf' />
            </div>
        </>
    )
}
