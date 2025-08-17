import React from 'react';
import Button from '../Button';
import {
  Card,
  Image,
  Typography,
  Heading1,
  Heading2,
  Body,
  Caption,
} from './index';

/**
 * Component showcase for testing all UI components
 * This can be used for development and testing purposes
 */
export function ComponentShowcase() {
  return (
    <div className="space-y-8 p-8">
      {/* Typography Components */}
      <section>
        <Heading2>Typography Components</Heading2>
        <div className="space-y-4">
          <Heading1>Heading 1 Example</Heading1>
          <Heading2>Heading 2 Example</Heading2>
          <Body>
            This is a body text example using the Body component. It
            demonstrates the default styling for paragraph content.
          </Body>
          <Caption>This is a caption text example</Caption>
          <Typography variant="overline">Overline text example</Typography>
        </div>
      </section>

      {/* Button Components */}
      <section>
        <Heading2>Button Components</Heading2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="text">Text Button</Button>
          <Button variant="primary" loading>
            Loading Button
          </Button>
          <Button variant="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="primary" arrow="right">
            Button with Arrow
          </Button>
        </div>
      </section>

      {/* Card Components */}
      <section>
        <Heading2>Card Components</Heading2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            title="Simple Card"
            description="This is a simple card without an image, demonstrating the basic card layout and styling."
            actions={[
              { label: 'Learn More', variant: 'primary' },
              { label: 'View Details', variant: 'outline' },
            ]}
          />

          <Card
            title="Card with Image"
            description="This card includes an image to show how visual content is displayed within the card component."
            image={{
              src: '/placeholder-image.svg',
              alt: 'Placeholder image',
              width: 400,
              height: 300,
            }}
            actions={[{ label: 'View Project', variant: 'primary' }]}
          />
        </div>
      </section>

      {/* Image Component */}
      <section>
        <Heading2>Image Component</Heading2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Caption>Standard Image</Caption>
            <Image
              src="/placeholder-image.svg"
              alt="Standard image example"
              width={200}
              height={150}
              containerClassName="rounded-lg overflow-hidden"
            />
          </div>

          <div>
            <Caption>Image with Loading</Caption>
            <Image
              src="/nonexistent-image.jpg"
              alt="Image that will show loading then error"
              width={200}
              height={150}
              containerClassName="rounded-lg overflow-hidden"
            />
          </div>

          <div>
            <Caption>Image with Fallback</Caption>
            <Image
              src="/another-nonexistent-image.jpg"
              alt="Image that will use fallback"
              width={200}
              height={150}
              fallbackSrc="/placeholder-image.svg"
              containerClassName="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
