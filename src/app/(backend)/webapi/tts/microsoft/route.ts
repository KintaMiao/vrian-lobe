import { MicrosoftSpeechPayload, MicrosoftSpeechTTS } from '@lobehub/tts';

export const runtime = 'nodejs';

export const POST = async (req: Request) => {
  const payload = (await req.json()) as MicrosoftSpeechPayload;

  return await MicrosoftSpeechTTS.createRequest({ payload });
};
