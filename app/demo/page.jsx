'use client';
import Slider1, { CarouselItem } from '@components/Sliders/Slider1';
import { Grid, useMantineTheme, rem, Container, createStyles, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, {useState, useEffect} from 'react';
import DaktiloCard from '@components/DaktiloCard';
import { mansetData, mansetDataSm } from '@utils/milliGazeteDemo';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import AuthorCard from '@components/UserCards/AuthorCard';
import { authorData } from '@utils/milliGazeteDemo';
import DaktiloSlider from '@components/DaktiloSlider';
import Grid3 from '@components/GridDemo/Grid3';
import DaktiloSliderCard from '@components/DaktiloSliderCard';

const res = {
  grid: {
    columns: 12,
  },
  rows: [
    {
      components: [
        {
          name: 'Slider1',
          props: {
            options: [1, 2, 3],
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
        },
        
        {
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.1',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },

              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.2',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
           
              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.3',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
               
              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.4',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
               
              },
            ],
          },
        },
      ],
    },
    {
      components: [
        {
          name: 'DaktiloCard',
          props: {
            title: 'Title 2',
            image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt: 'alt',
            category: 'Ekonomi'
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
            
          }
        },
        {
          name: 'DaktiloCard',
          props: {
            title: 'Title 2',
            image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt: 'alt',
            category: 'Ekonomi'
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
            
          }
        },
      ]
    },
    {
      components: [
        {
          name: 'DaktiloSliderCard',
          props: {
            title: 'Deneme',
            image: 'https://static.daktilo.com/sites/71/uploads/2023/08/05/large/turbulansi-onleyen-yerli-cip-dedi-20-milyon-tl-dolandirdi%20(1).jpg',
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
        },
        {
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
      
            ]
          }
        }
      ],
    },

    
  ],
};

const ComponentMapper = (component) => {
  const components = {
    'DaktiloCard': DaktiloCard,
    'Slider1': Slider1,
    'DaktiloSliderCard': DaktiloSliderCard,
  };
  return components[component];
};

const page = () => {
  return ( 
       <>
    <Container my="md">
    <Grid columns={res.grid.columns}>
      {res.rows.map((row, index) => {
        return row.components.map((component, componentIndex) => {
          const Component = ComponentMapper(component.name);

          if (component.columns && component.columns.components.length) {
            return (
              <Grid.Col
                lg={component.breakpoints.lg}
                md={component.breakpoints.md}
                sm={component.breakpoints.sm}
                xs={component.breakpoints.xs}
                key={componentIndex}
                id={`grid col ${index}`}
              >
            <SimpleGrid cols={component.columns.columns} >
                {
                  component.columns.components.map(col => {
                    const NewComponent = ComponentMapper(col.name);
                    return ( 
                        <NewComponent {...col.props} />
                        );
                      })
                    }
                    </SimpleGrid>
              </Grid.Col>
            );
           
          }

          return (
            <Grid.Col
              lg={component.breakpoints.lg}
              md={component.breakpoints.md}
              sm={component.breakpoints.sm}
              xs={component.breakpoints.xs}
              key={componentIndex}
              id={`grid col ${index}`}
          >
            {component.name === 'Slider1' ? (<>
            <Component>
              {component.props.options.map((option, slider1Index) => {
                return (
                  <CarouselItem key={slider1Index}>{option}</CarouselItem>
                );
              })}
            </Component>
            </>) : (
              <SimpleGrid cols={component.columns}>
              <Component {...component.props} />
            </SimpleGrid> 
          
              
            )}
            
          </Grid.Col>
          );
        });
      })}
    </Grid>

    {/* <Grid columns={12} mt={10}>
                {mansetData.map((card, index) => (
                    <Grid.Col md={3} lg={3} sm={6} xs={6} key={index}>
                        <DaktiloCard
                            title={card.title}
                            image={card.image}
                            imageAlt={card.imageAlt}
                            ads={card.ads}
                            category={card.category}
                        />
                    </Grid.Col>
                ))}
                    <Grid.Col md={8} lg={6} xs={12} sm={12}>
                      <Slider1>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                      </Slider1>
                    </Grid.Col>
                    <Grid.Col md={4} lg={6} xs={12} sm={12}>
                      
                    </Grid.Col>
            </Grid> */}
  </Container>
     </>
  )
}

export default page;

/**
 * 
 *     {
      components: [
        {
          name: 'Slider1',
          props: {
            options: [1, 2, 3],
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
        },
        
        {
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.1',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },

              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.2',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
           
              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.3',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
               
              },
              {
                name: 'DaktiloCard',
                props: {
                  title:'Title 1.4',
                  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
                  imageAlt:'alt',
                  ads: 'RESMİ İLANDIR 2',
                  category: 'Sport',
                },
               
              },
            ],
          },
        },
      ],
    },
    {
      components: [
        {
          name: 'DaktiloCard',
          props: {
            title: 'Title 2',
            image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt: 'alt',
            category: 'Ekonomi'
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
            
          }
        },
        {
          name: 'DaktiloCard',
          props: {
            title: 'Title 2',
            image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt: 'alt',
            category: 'Ekonomi'
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
            
          }
        },
      ]
    },
    {
      components: [
        {
          name: 'DaktiloSliderCard',
          props: {
            title: 'Deneme',
            image: 'https://static.daktilo.com/sites/71/uploads/2023/08/05/large/turbulansi-onleyen-yerli-cip-dedi-20-milyon-tl-dolandirdi%20(1).jpg',
          },
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
        },
        {
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
              {
                name: 'DaktiloCard',
          props: {
            title:'Title 3.1',
            image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            imageAlt:'alt',
            ads: 'RESMİ İLANDIR 3',
            category: 'Ekonomi',
          },
              },
      
            ]
          }
        }
      ],
    },
 * 
 * 
 * 
 */