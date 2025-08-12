import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container, Stack, Flex, Spacer } from '@amir-kaman/sharmin-core/';

const meta: Meta = {
  title: 'Components/Layouts',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Layout System

A comprehensive set of layout components for building responsive, flexible user interfaces.

## Components

### Container
- **Purpose**: Provides consistent max-width layouts with responsive padding
- **Use Cases**: Page wrappers, content sections, responsive containers
- **Props**: \`size\` (sm, md, lg, xl, 2xl, full), \`centered\` (boolean)

### Stack  
- **Purpose**: Arranges children with consistent spacing in a single direction
- **Use Cases**: Forms, lists, vertical/horizontal navigation, content sections
- **Props**: \`direction\`, \`spacing\`, \`align\`, \`justify\`, \`wrap\`

### Flex
- **Purpose**: Provides full flexbox control for complex layouts
- **Use Cases**: Headers, cards, centering content, responsive grids
- **Props**: \`direction\`, \`align\`, \`justify\`, \`gap\`, \`wrap\`

### Spacer
- **Purpose**: Adds consistent spacing between elements
- **Use Cases**: Custom spacing, layout fine-tuning, visual separation
- **Props**: \`size\` (design system spacing tokens)

## Design Principles
- **Consistent**: Uses design system spacing tokens
- **Responsive**: Adapts to different screen sizes  
- **Composable**: Components work together seamlessly
- **Accessible**: Semantic HTML and ARIA support
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Helper components for examples
const ExampleBox = ({ 
  children, 
  color = '#3b82f6', 
  height = '60px',
  width,
  padding = '1rem'
}: { 
  children?: React.ReactNode; 
  color?: string; 
  height?: string;
  width?: string;
  padding?: string;
}) => (
  <div style={{
    backgroundColor: color,
    color: 'white',
    padding,
    borderRadius: '6px',
    textAlign: 'center',
    fontWeight: '500',
    height,
    width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    flexShrink: 0
  }}>
    {children}
  </div>
);

const DemoContainer = ({ 
  title, 
  children, 
  description 
}: { 
  title: string; 
  children: React.ReactNode;
  description?: string;
}) => (
  <div style={{
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: 'white',
    marginBottom: '2rem'
  }}>
    <div style={{ marginBottom: '1rem' }}>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
      {description && (
        <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280', fontSize: '0.875rem' }}>
          {description}
        </p>
      )}
    </div>
    <div style={{ 
      border: '1px dashed #d1d5db', 
      borderRadius: '6px', 
      padding: '1rem',
      backgroundColor: '#f9fafb'
    }}>
      {children}
    </div>
  </div>
);

// Main Stories
export const AllComponents: Story = {
  render: () => (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '2rem 0' }}>
      <Container size="xl">
        <Stack spacing="xl">
          {/* Header */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <Stack spacing="md">
              <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
                Layout System Demo
              </h1>
              <p style={{ margin: 0, fontSize: '1.125rem', color: '#6b7280' }}>
                Comprehensive examples of Container, Stack, Flex, and Spacer components working together.
              </p>
            </Stack>
          </div>

          {/* Container Examples */}
          <DemoContainer 
            title="Container Component"
            description="Provides consistent max-width layouts with responsive padding"
          >
            <Stack spacing="lg">
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Different Container Sizes</h4>
                <Stack spacing="sm">
                  {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
                    <Container key={size} size={size} style={{ border: '2px solid #3b82f6', borderRadius: '4px' }}>
                      <ExampleBox height="60px">
                        Container {size.toUpperCase()} ({size === 'sm' ? '640px' : size === 'md' ? '768px' : size === 'lg' ? '1024px' : '1280px'} max)
                      </ExampleBox>
                    </Container>
                  ))}
                </Stack>
              </div>
            </Stack>
          </DemoContainer>

          {/* Stack Examples */}
          <DemoContainer 
            title="Stack Component"
            description="Arranges children with consistent spacing in a single direction"
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Vertical Stack (Column)</h4>
                <Stack direction="column" spacing="md">
                  <ExampleBox>Item 1</ExampleBox>
                  <ExampleBox>Item 2</ExampleBox>
                  <ExampleBox>Item 3</ExampleBox>
                </Stack>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Horizontal Stack (Row)</h4>
                <Stack direction="row" spacing="md">
                  <ExampleBox>Item 1</ExampleBox>
                  <ExampleBox>Item 2</ExampleBox>
                  <ExampleBox>Item 3</ExampleBox>
                </Stack>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Different Spacing</h4>
                <Stack spacing="lg">
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Small spacing (sm)</p>
                    <Stack direction="row" spacing="sm">
                      <ExampleBox width="60px">1</ExampleBox>
                      <ExampleBox width="60px">2</ExampleBox>
                      <ExampleBox width="60px">3</ExampleBox>
                    </Stack>
                  </div>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Large spacing (lg)</p>
                    <Stack direction="row" spacing="lg">
                      <ExampleBox width="60px">1</ExampleBox>
                      <ExampleBox width="60px">2</ExampleBox>
                      <ExampleBox width="60px">3</ExampleBox>
                    </Stack>
                  </div>
                </Stack>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Alignment & Justification</h4>
                <div style={{ border: '1px dashed #94a3b8', padding: '1rem', minHeight: '120px' }}>
                  <Stack direction="row" spacing="sm" align="center" justify="space-between">
                    <ExampleBox height="40px">Short</ExampleBox>
                    <ExampleBox height="80px">Tall</ExampleBox>
                    <ExampleBox height="60px">Medium</ExampleBox>
                  </Stack>
                </div>
              </div>
            </div>
          </DemoContainer>

          {/* Flex Examples */}
          <DemoContainer 
            title="Flex Component"
            description="Provides full flexbox control for complex layouts"
          >
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Centering Content</h4>
                <div style={{ border: '1px dashed #94a3b8', height: '120px' }}>
                  <Flex justify="center" align="center" style={{ height: '100%' }}>
                    <ExampleBox color="#059669">Perfectly Centered</ExampleBox>
                  </Flex>
                </div>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Space Between Layout</h4>
                <div style={{ border: '1px dashed #94a3b8', padding: '1rem' }}>
                  <Flex justify="space-between" align="center">
                    <ExampleBox>Left</ExampleBox>
                    <ExampleBox>Center</ExampleBox>
                    <ExampleBox>Right</ExampleBox>
                  </Flex>
                </div>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Flexible Wrapping</h4>
                <div style={{ border: '1px dashed #94a3b8', padding: '1rem', width: '300px' }}>
                  <Flex wrap="wrap" gap="sm">
                    <ExampleBox width="100px">Item 1</ExampleBox>
                    <ExampleBox width="100px">Item 2</ExampleBox>
                    <ExampleBox width="100px">Item 3</ExampleBox>
                    <ExampleBox width="100px">Item 4</ExampleBox>
                  </Flex>
                </div>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Different Gap Sizes</h4>
                <Stack spacing="md">
                  {(['xs', 'sm', 'md', 'lg'] as const).map(gap => (
                    <div key={gap}>
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#6b7280' }}>
                        Gap: {gap}
                      </p>
                      <Flex gap={gap}>
                        <ExampleBox width="60px">1</ExampleBox>
                        <ExampleBox width="60px">2</ExampleBox>
                        <ExampleBox width="60px">3</ExampleBox>
                      </Flex>
                    </div>
                  ))}
                </Stack>
              </div>
            </div>
          </DemoContainer>

          {/* Spacer Examples */}
          <DemoContainer 
            title="Spacer Component"
            description="Adds consistent spacing between elements"
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Vertical Spacing</h4>
                <Stack direction="column">
                  <ExampleBox>Element 1</ExampleBox>
                  <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px dashed #ef4444' }}>
                    <Spacer size={6} />
                  </div>
                  <ExampleBox>Element 2</ExampleBox>
                </Stack>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: '#6b7280' }}>
                  Red area shows Spacer size="6" (24px)
                </p>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Horizontal Spacing</h4>
                <Flex align="center">
                  <ExampleBox>Left</ExampleBox>
                  <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px dashed #ef4444' }}>
                    <Spacer size={8} />
                  </div>
                  <ExampleBox>Right</ExampleBox>
                </Flex>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: '#6b7280' }}>
                  Red area shows Spacer size="8" (32px)
                </p>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Different Spacer Sizes</h4>
                <Stack spacing="sm">
                  {(['2', '4', '6', '8'] as const).map(size => (
                    <div key={size}>
                      <Flex align="center">
                        <ExampleBox width="50px" height="30px">A</ExampleBox>
                        <div
                          style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.2)',
                            border: '1px dashed #ef4444',
                            minHeight: '20px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <Spacer size={size as any} />
                        </div>
                        <ExampleBox width="50px" height="30px">B</ExampleBox>
                      </Flex>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: '#6b7280' }}>
                        Size {size} ({size === '2' ? '8px' : size === '4' ? '16px' : size === '6' ? '24px' : '32px'})
                      </p>
                    </div>
                  ))}
                </Stack>
              </div>
            </div>
          </DemoContainer>

          {/* Real-world Examples */}
          <DemoContainer 
            title="Real-world Examples"
            description="Complex layouts combining all layout components"
          >
            <Stack spacing="xl">
              {/* Header Example */}
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Navigation Header</h4>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', backgroundColor: 'white' }}>
                  <Container size="lg">
                    <Flex justify="space-between" align="center">
                      <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Brand</div>
                      
                      <Flex gap="md" align="center">
                        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>Home</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>About</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#374151' }}>Contact</a>
                        
                        <Spacer size={4} />
                        
                        <button style={{ 
                          padding: '0.5rem 1rem', 
                          border: 'none', 
                          borderRadius: '4px', 
                          backgroundColor: '#3b82f6', 
                          color: 'white' 
                        }}>
                          Get Started
                        </button>
                      </Flex>
                    </Flex>
                  </Container>
                </div>
              </div>

              {/* Form Example */}
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Contact Form</h4>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '2rem', backgroundColor: 'white' }}>
                  <Container size="md">
                    <Stack spacing="lg">
                      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>Get in Touch</h3>
                      
                      <Stack spacing="md">
                        <Stack spacing="sm">
                          <label style={{ fontWeight: '500' }}>Name</label>
                          <input style={{ 
                            padding: '0.75rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '6px',
                            width: '100%',
                            boxSizing: 'border-box'
                          }} />
                        </Stack>
                        
                        <Stack spacing="sm">
                          <label style={{ fontWeight: '500' }}>Email</label>
                          <input style={{ 
                            padding: '0.75rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '6px',
                            width: '100%',
                            boxSizing: 'border-box'
                          }} />
                        </Stack>
                        
                        <Stack spacing="sm">
                          <label style={{ fontWeight: '500' }}>Message</label>
                          <textarea style={{ 
                            padding: '0.75rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '6px',
                            width: '100%',
                            height: '120px',
                            boxSizing: 'border-box',
                            resize: 'vertical'
                          }} />
                        </Stack>
                      </Stack>
                      
                      <Spacer size={4} />
                      
                      <Flex justify="end" gap="sm">
                        <button style={{ 
                          padding: '0.75rem 1.5rem', 
                          border: '1px solid #d1d5db', 
                          borderRadius: '6px', 
                          backgroundColor: 'white' 
                        }}>
                          Cancel
                        </button>
                        <button style={{ 
                          padding: '0.75rem 1.5rem', 
                          border: 'none', 
                          borderRadius: '6px', 
                          backgroundColor: '#059669', 
                          color: 'white' 
                        }}>
                          Send Message
                        </button>
                      </Flex>
                    </Stack>
                  </Container>
                </div>
              </div>

              {/* Card Grid Example */}
              <div>
                <h4 style={{ margin: '0 0 1rem 0' }}>Feature Cards Grid</h4>
                <Container size="lg">
                  <Flex wrap="wrap" gap="lg">
                    {[
                      { title: 'Container', desc: 'Responsive layouts', icon: '📦' },
                      { title: 'Stack', desc: 'Directional spacing', icon: '📚' },
                      { title: 'Flex', desc: 'Flexible layouts', icon: '🔧' },
                      { title: 'Spacer', desc: 'Precise spacing', icon: '📏' }
                    ].map((feature, i) => (
                      <div key={i} style={{ 
                        flex: '1', 
                        minWidth: '200px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        backgroundColor: 'white'
                      }}>
                        <Stack spacing="md">
                          <div style={{ fontSize: '2rem' }}>{feature.icon}</div>
                          <Stack spacing="sm">
                            <h5 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600' }}>
                              {feature.title}
                            </h5>
                            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                              {feature.desc}
                            </p>
                          </Stack>
                          
                          <Spacer size={2} />
                          
                          <button style={{ 
                            padding: '0.5rem 1rem', 
                            border: '1px solid #3b82f6', 
                            borderRadius: '4px', 
                            backgroundColor: 'transparent',
                            color: '#3b82f6',
                            fontSize: '0.875rem',
                            cursor: 'pointer'
                          }}>
                            Learn More
                          </button>
                        </Stack>
                      </div>
                    ))}
                  </Flex>
                </Container>
              </div>
            </Stack>
          </DemoContainer>
        </Stack>
      </Container>
    </div>
  ),
};