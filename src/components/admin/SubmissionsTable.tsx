import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ResponseDialog } from './ResponseDialog';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  admin_response: string | null;
  created_at: string;
  responded_at: string | null;
}

interface SubmissionsTableProps {
  submissions: Submission[];
  onRefresh: () => void;
}

const statusColors = {
  pending: 'bg-yellow-500',
  in_progress: 'bg-blue-500',
  resolved: 'bg-green-500',
};

export const SubmissionsTable = ({ submissions, onRefresh }: SubmissionsTableProps) => {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRespond = (submission: Submission) => {
    setSelectedSubmission(submission);
    setDialogOpen(true);
  };

  const handleDialogSuccess = () => {
    onRefresh();
    setDialogOpen(false);
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  No submissions found
                </TableCell>
              </TableRow>
            ) : (
              submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.phone || '-'}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusColors[submission.status as keyof typeof statusColors]}>
                      {submission.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(submission.created_at), 'MMM d, yyyy')}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRespond(submission)}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      {submission.admin_response ? 'Edit Response' : 'Respond'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <ResponseDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        submission={selectedSubmission}
        onSuccess={handleDialogSuccess}
      />
    </>
  );
};
