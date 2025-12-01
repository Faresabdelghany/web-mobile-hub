import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface ResponseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submission: {
    id: string;
    name: string;
    email: string;
    message: string;
    status: string;
    admin_response?: string;
  } | null;
  onSuccess: () => void;
}

export const ResponseDialog = ({ open, onOpenChange, submission, onSuccess }: ResponseDialogProps) => {
  const [response, setResponse] = useState(submission?.admin_response || '');
  const [status, setStatus] = useState(submission?.status || 'pending');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!submission) return;

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('contact_submissions')
        .update({
          status,
          admin_response: response,
          responded_at: new Date().toISOString(),
          responded_by: user?.id
        })
        .eq('id', submission.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Response saved successfully',
      });

      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving response:', error);
      toast({
        title: 'Error',
        description: 'Failed to save response',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Respond to Submission</DialogTitle>
          <DialogDescription>
            From: {submission?.name} ({submission?.email})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Original Message</Label>
            <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted rounded-md">
              {submission?.message}
            </p>
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="response">Your Response</Label>
            <Textarea
              id="response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Enter your response..."
              rows={6}
              className="mt-1"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Saving...' : 'Save Response'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
