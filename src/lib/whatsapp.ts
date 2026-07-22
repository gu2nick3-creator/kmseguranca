export const WHATSAPP_NUMBER = "5511964427943";

/**
 * Monta uma URL de WhatsApp com o texto corretamente codificado.
 * Usar sempre esta função (em vez de montar a string manualmente) evita que
 * acentos, espaços e pontuação quebrem o link em alguns navegadores/apps —
 * era a causa mais provável do botão "Solicitar atendimento" parecer não
 * funcionar em determinados aparelhos.
 */
export function buildWhatsAppUrl(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
