-- Add DELETE policy for contact_submissions
CREATE POLICY "Users can delete their own submissions"
  ON public.contact_submissions FOR DELETE
  USING (auth.uid() = user_id);