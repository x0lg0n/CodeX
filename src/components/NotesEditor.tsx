import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Edit3, Eye, Save, FileText, Calendar } from "lucide-react";
import { useUser } from '../contexts/UserContext';

interface NotesEditorProps {
  isOpen: boolean;
  onClose: () => void;
  noteKey: string;
  title: string;
}

export const NotesEditor: React.FC<NotesEditorProps> = ({ isOpen, onClose, noteKey, title }) => {
  const { getNote, addNote } = useUser();
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState('edit');
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (isOpen) {
      const existingNote = getNote(noteKey);
      setContent(existingNote);
      setActiveTab('edit');
    }
  }, [isOpen, noteKey, getNote]);

  const handleSave = async () => {
    setIsSaving(true);
    addNote(noteKey, content);
    setLastSaved(new Date());
    setTimeout(() => setIsSaving(false), 500); // Visual feedback
  };

  const handleAutoSave = () => {
    if (content !== getNote(noteKey)) {
      addNote(noteKey, content);
      setLastSaved(new Date());
    }
  };

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(handleAutoSave, 30000);
    return () => clearInterval(interval);
  }, [content]);

  const markdownExample = `# Notes for ${title}

## Quick Start Guide

### Checklist
- [ ] Complete theory review
- [x] Solve practice problems
- [ ] Review solutions

### Key Concepts
- **Important**: This is a key point
- *Emphasis*: Secondary information
- \`code()\`: Inline code snippets

### Code Examples
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
\`\`\`

### Resources
- [LeetCode](https://leetcode.com)
- [GeeksforGeeks](https://geeksforgeeks.org)

---
*Last updated: ${new Date().toLocaleDateString()}*`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Notes: {title}
          </DialogTitle>
          <DialogDescription className="flex items-center justify-between">
            <span>Write your notes in Markdown format</span>
            {lastSaved && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                Last saved: {lastSaved.toLocaleTimeString()}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="flex items-center justify-between border-b pb-2">
              <TabsList className="grid w-auto grid-cols-2">
                <TabsTrigger value="edit" className="flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {content.length} characters
                </Badge>
                <Button
                  onClick={handleSave}
                  size="sm"
                  disabled={isSaving}
                  className="flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  {isSaving ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </div>

            <TabsContent value="edit" className="flex-1 mt-4 space-y-4 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[60vh]">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Markdown Editor</h3>
                    {!content && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setContent(markdownExample)}
                      >
                        Load Example
                      </Button>
                    )}
                  </div>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your notes here using Markdown syntax..."
                    className="h-full resize-none font-mono text-sm"
                  />
                </div>
                <div className="hidden lg:block">
                  <h3 className="text-sm font-medium mb-2">Live Preview</h3>
                  <Card className="h-full">
                    <CardContent className="p-4 h-full overflow-auto">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        className="prose prose-sm dark:prose-invert max-w-none"
                      >
                        {content || '*Start typing to see preview...*'}
                      </ReactMarkdown>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="flex-1 mt-4 overflow-hidden">
              <Card className="h-[60vh]">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent className="h-full overflow-auto">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    className="prose dark:prose-invert max-w-none"
                  >
                    {content || '*No content to preview...*'}
                  </ReactMarkdown>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t pt-4">
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Markdown Tips:</strong></p>
            <div className="grid grid-cols-2 gap-2">
              <p>• **bold** or *italic*</p>
              <p>• `inline code`</p>
              <p>• # Header 1</p>
              <p>• - [ ] Task list</p>
              <p>• [Link](url)</p>
              <p>• ```code block```</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};