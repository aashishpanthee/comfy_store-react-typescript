import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AboutHighlightItem } from '@/data/aboutHighlights';

type AboutHighlightProps = AboutHighlightItem;

const AboutHighlight = ({ title, content, className }: AboutHighlightProps) => {
  return (
    <Card className={className ?? ''}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default AboutHighlight;
