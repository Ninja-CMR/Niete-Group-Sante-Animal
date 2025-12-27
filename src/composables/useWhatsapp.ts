export function useWhatsAppRedirect() {
    const sendBookingMessage = (values: any) => {
        const phoneNumber = "237695851502";

        const dateFormatted = new Date(values.appointmentDate).toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const message = `🐾 *NIETE GROUP - NOUVEAU RDV* 🐾\n` +
            `---------------------------\n` +
            `👤 *Client* : ${values.name}\n` +
            `🏥 *Service* : ${values.service}\n` +
            `📅 *Date* : ${dateFormatted}\n` +
            `⏰ *Créneau* : ${values.timeRange === 'matin' ? 'Matin (08h-12h)' : 'Après-midi (13h-18h)'}\n` +
            `---------------------------\n` +
            `📝 *Notes* : ${values.notes || 'Aucune précision particulière'}\n` +
            `---------------------------\n` +
            `_Demande envoyée depuis le site web_`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return { sendBookingMessage };
}