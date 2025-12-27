import { useForm } from 'vee-validate';
import * as yup from 'yup';

interface BookingForm {
    name: string;
    service: string;
    date: string;
    timeRange: string;
    notes?: string;
}

export function useBooking(whatsappNumber: string = "237695851502") {

    const schema = yup.object({
        name: yup.string().required('Le nom est requis').min(3, 'Nom trop court'),
        service: yup.string().required('Le service est requis'),
        date: yup.string().required('La date est requise'),
        timeRange: yup.string().required('Le créneau est requis'),
        notes: yup.string().nullable()
    });

    const { defineField, handleSubmit, errors, isSubmitting } = useForm<BookingForm>({
        validationSchema: schema,
        initialValues: {
            service: '',
            timeRange: 'matin',
            notes: ''
        }
    });

    const [name] = defineField('name');
    const [service] = defineField('service');
    const [date] = defineField('date');
    const [timeRange] = defineField('timeRange');
    const [notes] = defineField('notes');

    const onSubmit = handleSubmit((values) => {
        const dateObj = new Date(values.date);
        const dateFormatted = dateObj.toLocaleDateString('fr-FR', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });

        const message = `🐾 *NIETE GROUP - RDV* 🐾%0A` +
            `---------------------------%0A` +
            `*Client:* ${values.name}%0A` +
            `*Service:* ${values.service}%0A` +
            `*Date:* ${dateFormatted}%0A` +
            `*Créneau:* ${values.timeRange === 'matin' ? 'Matin (08h-12h)' : 'Après-midi (13h-18h)'}%0A` +
            `---------------------------%0A` +
            `*Notes:* ${values.notes || 'Aucune'}%0A%0A` +
            `_Envoyé depuis le site web_`;

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    });

    return { name, service, date, timeRange, notes, errors, isSubmitting, onSubmit };
}