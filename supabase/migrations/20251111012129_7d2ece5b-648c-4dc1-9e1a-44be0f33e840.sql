-- Create leads table for lead capture form
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  nome_marca TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (no auth required for lead capture)
CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Create policy to prevent public reading (only admins should read)
CREATE POLICY "Prevent public read of leads"
ON public.leads
FOR SELECT
USING (false);

-- Create index for better performance on created_at queries
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);