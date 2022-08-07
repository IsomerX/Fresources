import Head from 'next/head'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { FileUpload } from 'primereact/fileupload'
import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

export default function Admin() {
    const collegeSelectItems = [
        { label: 'DTU', value: 'DTU' },
        { label: 'NSUT', value: 'NSUT' },
        { label: 'IGDTUW', value: 'IGDTUW' },
    ]

    const yearSelectItems = [
        { label: 'First', value: 'first' },
        { label: 'Second', value: 'second' },
    ]

    const subjectSelectItems = [
        { label: 'Maths', value: 'maths' },
        { label: 'Physics', value: 'physics' },
        { label: 'Chemistry', value: 'chemistry' },
        { label: 'Computer', value: 'computer' },
    ]

    const topicSelectItems = [
        { label: 'Book', value: 'book' },
        { label: 'Assignment', value: 'assignment' },
        { label: 'Paper', value: 'paper' },
        { label: 'Playlist', value: 'playlist' },
        { label: 'Experiment', value: 'experiment' },
        { label: 'Notes', value: 'notes' },
    ]

    const [formData, setFormData] = useState({
        college: collegeSelectItems[0],
        year: yearSelectItems[0],
        subject: subjectSelectItems[0],
        topic: topicSelectItems[0],
        name: '',
    })

    const uploadHandler = async (file) => {
        let data = new FormData()
        data.append('file', file)

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: {
                data,
                formData,
            },
        })
    }

    return (
        <div>
            <Head>
                <title>Movie Titles</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Dropdown
                value={formData.college}
                options={collegeSelectItems}
                onChange={(e) =>
                    setFormData((prev) => {
                        return { ...prev, college: e.value }
                    })
                }
                placeholder='Select a College'
            />
            <Dropdown
                value={formData.year}
                options={yearSelectItems}
                onChange={(e) =>
                    setFormData((prev) => {
                        return { ...prev, year: e.value }
                    })
                }
                placeholder='Select a Year'
            />
            <Dropdown
                value={formData.subject}
                options={subjectSelectItems}
                onChange={(e) =>
                    setFormData((prev) => {
                        return { ...prev, subject: e.value }
                    })
                }
                placeholder='Select a Subject'
            />
            <Dropdown
                value={formData.topic}
                options={topicSelectItems}
                onChange={(e) =>
                    setFormData((prev) => {
                        return { ...prev, topic: e.value }
                    })
                }
                placeholder='Select a Topic'
            />
            <InputText
                value={formData.name}
                onChange={(e) =>
                    setFormData((prev) => {
                        return { ...prev, name: e.target.value }
                    })
                }
            />

            <FileUpload name='demo' url='/api/upload' />
        </div>
    )
}
